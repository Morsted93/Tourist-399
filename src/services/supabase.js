import { createClient } from '@supabase/supabase-js'

// DB = tNPnWxdIfnvMI3jC

const SUPABASE_URL = 'https://bdwjylvdxxqzkjrfafur.supabase.co'
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd2p5bHZkeHhxemtqcmZhZnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzNjk4NjgsImV4cCI6MjA0NDk0NTg2OH0.6yic3bXuQtPg8i3c0znc7lxgMhcc4bM7txCKuwBDfcQ'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase
