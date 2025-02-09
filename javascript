/* Body styling for a clean, centered, and responsive layout */
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
  }
  
  /* Container styling with a maximum width for responsiveness */
  .container {
    width: 90%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  /* Title styling */
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
    color: #333;
  }
  
  /* Input group styling for proper alignment */
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .input-group label {
    width: 120px;
    text-align: right;
    margin-right: 10px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  /* Button group styling */
  .button-group {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
  
  /* Button styling with hover effects */
  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #f8f8f8;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #e8e8e8;
  }
  
