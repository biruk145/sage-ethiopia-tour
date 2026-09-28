import { createClient } from '@supabase/supabase-js';

// Supabase project credentials provided
const DEFAULT_URL = 'https://yjmmcwctnxjuoyenhxxe.supabase.co';
const DEFAULT_KEY = 'sb_publishable_1DW4vav_5Gqp_dwG4p6_CA_OEOUZnFf';

// Clean the URL: strip /rest/v1 or trailing slashes if present
function sanitizeSupabaseUrl(url?: string): string {
  if (!url) return DEFAULT_URL;
  return url
    .trim()
    .replace(/\/rest\/v1\/?$/, '')
    .replace(/\/+$/, '');
}

const supabaseUrl = sanitizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL);
const supabaseKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_KEY).trim();

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface CheckoutOrderData {
  name: string;
  email_address: string;
  booking: string;
  subscription?: string;
  total_amount?: number;
  date?: string;
  phone?: string;
  guests?: string | number;
  message?: string;
  status?: string;
  payment_method?: string;
}

/**
 * Stores checkout / booking order data directly into Supabase 'orders' table.
 */
export async function createOrder(data: CheckoutOrderData) {
  // Format booking details to include guests, phone, payment method, and notes
  const details: string[] = [];
  if (data.guests) details.push(`Guests: ${data.guests}`);
  if (data.phone) details.push(`Phone: ${data.phone}`);
  if (data.payment_method) details.push(`Payment: ${data.payment_method}`);
  if (data.message) details.push(`Note: ${data.message}`);

  const bookingDetails = details.length > 0
    ? `${data.booking.trim()} (${details.join(' | ')})`
    : data.booking.trim();

  // Payload strictly matching the columns in public.orders:
  // name, email_address, booking, subscription, total_amount, date, status
  const payload = {
    name: data.name.trim(),
    email_address: data.email_address.trim(),
    booking: bookingDetails || 'General Inquiry',
    subscription: data.subscription || 'standard',
    total_amount: Number(data.total_amount) || 0.00,
    date: data.date || new Date().toISOString().split('T')[0],
    status: data.status || 'pending'
  };

  const { data: record, error } = await supabase
    .from('orders')
    .insert([payload])
    .select();

  if (error) {
    throw error;
  }

  return record && record[0] ? record[0] : null;
}
