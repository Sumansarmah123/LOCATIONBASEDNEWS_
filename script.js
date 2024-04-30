// Initialize Supabase client
const supabaseUrl = https://whywmpnqnataijixsamh.supabase.co;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeXdtcG5xbmF0YWlqaXhzYW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDAyODcsImV4cCI6MjAzMDA3NjI4N30.xQO40QTBHul_Mong4pnl_CCJI1Sn7L28MTL6UINz1UU;
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Function to fetch data from Supabase and display it
async function fetchDataFromSupabase() {
    try {
        // Fetch data from a table named 'posts'
        const { data, error } = await supabase.from('posts').select('*');
        
        if (error) {
            console.error('Error fetching data from Supabase:', error.message);
            return;
        }

        // Display the retrieved data
        const container = document.getElementById('dataContainer');
        container.innerHTML = ''; // Clear previous data

        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            `;
            container.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data from Supabase:', error.message);
    }
}

// Initial data fetch when the page loads
fetchDataFromSupabase();
