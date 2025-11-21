import { supabase as supabaseClient } from "./client";

// This wrapper relaxes TypeScript typing for Supabase operations.
// It keeps runtime behavior identical while avoiding strict table typing
// from the auto-generated Database types (which are currently empty).
export const supabase = supabaseClient as any;
