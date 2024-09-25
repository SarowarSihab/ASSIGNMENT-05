let balance = 10000; 


function donate(campaign, currentDonation) {
    const inputField = document.getElementById(campaign + 'Input');
    const donationAmount = parseInt(inputField.value);


    if (!donationAmount || donationAmount <= 0 || donationAmount > balance) {
        alert("Invalid amount. Please ensure the donation does not exceed your available balance.");
        return;
    }

    balance -= donationAmount;
    document.getElementById('balance').innerText = balance;


    const donationElement = document.getElementById(campaign + 'Donation');
    let newDonationAmount = currentDonation + donationAmount;
    donationElement.innerText = newDonationAmount;

    addHistory(campaign, donationAmount);

    document.getElementById('successModal').checked = true;

    inputField.value = '';
}


function addHistory(campaign, amount) {
    const historyList = document.getElementById('historyList'); 
    const historyItem = document.createElement('li'); 


    const donationDate = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });

    
    historyItem.innerHTML = `<strong>${amount} BDT</strong> is Donated for <strong>${campaign.charAt(0).toUpperCase() + campaign.slice(1)}</strong> on <em>${donationDate}</em>`;


    historyList.appendChild(historyItem);
}





function navigateToDonation() {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
}


function navigateToHistory() {
    document.getElementById('historySection').classList.remove('hidden');
    document.getElementById('donationSection').classList.add('hidden');
}
