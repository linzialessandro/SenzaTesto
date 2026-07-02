require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log("Testing search_exercises RPC...");
  const { data, error } = await supabase.rpc('search_exercises', {
    search_query: null,
    filter_year: null
  });
  if (error) {
    console.error("RPC Error:", error);
  } else {
    console.log(`RPC Success! Returned ${data.length} rows.`);
    if (data.length > 0) {
      console.log(data[0]);
    }
  }
}

test();
