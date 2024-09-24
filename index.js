let balance = 100000; // Initialize the user balance

// Function to handle donation logic
function donate(campaign, currentDonation) {
    const inputField = document.getElementById(campaign + 'Input');
    const donationAmount = parseInt(inputField.value);

    // Validate the donation amount
    if (!donationAmount || donationAmount <= 0 || donationAmount > balance) {
        alert("Please enter a valid amount. Ensure the donation doesn't exceed your balance.");
        return;
    }

    // Deduct the donation amount from the user's balance
    balance -= donationAmount;
    document.getElementById('balance').innerText = balance;

    // Update the donation total for the campaign
    const donationElement = document.getElementById(campaign + 'Donation');
    let newDonationAmount = currentDonation + donationAmount;
    donationElement.innerText = newDonationAmount;

    // Add donation details to history
    addHistory(campaign, donationAmount);

    // Show the success modal
    document.getElementById('successModal').checked = true;

    // Clear the input field after the donation
    inputField.value = '';
}

// Function to add donation history dynamically
function addHistory(campaign, amount) {
    const historyList = document.getElementById('historyList'); // Get the history list container
    const historyItem = document.createElement('li'); // Create a new list item for the history entry

    // Get the current date and time
    const donationDate = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });

    // Set the text for the new history entry
    historyItem.innerHTML = `<strong>${amount} BDT</strong> is Donated for <strong>${campaign.charAt(0).toUpperCase() + campaign.slice(1)}</strong> on <em>${donationDate}</em>`;

    // Add the new history entry to the history list
    historyList.appendChild(historyItem);
}

// Function to navigate to the donation section
function navigateToDonation() {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
}

// Function to navigate to the history section
function navigateToHistory() {
    document.getElementById('historySection').classList.remove('hidden');
    document.getElementById('donationSection').classList.add('hidden');
}
