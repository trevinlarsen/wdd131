document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    const form = document.getElementById("registration-form");
    const summary = document.getElementById("summary");

    
    addButton.addEventListener("click", () => {
        participantCount++;

        const firstParticipant = document.querySelector(".participant1");
        const newParticipant = firstParticipant.cloneNode(true);

        newParticipant.className = `participant${participantCount}`;
        newParticipant.querySelector("p").textContent = `Participant ${participantCount}`;

        newParticipant.querySelectorAll("input, select").forEach((input) => {
            const name = input.getAttribute("name");
            if (name) {
                input.setAttribute("name", name + participantCount);
            }
            if (input.id) {
                input.id = input.id + participantCount;
            }
            input.value = "";
        });

        participantsFieldset.insertBefore(newParticipant, addButton);
    });

    
    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
    }

    
    function successTemplate(info) {
        return `Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.totalFees} in Fees.`;
    }

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const total = totalFees();
        const adultName = document.getElementById("adult-name").value || "Guest";

        form.style.display = "none";
        summary.textContent = successTemplate({
            name: adultName,
            count: participantCount,
            totalFees: total
        });
        console.log(summary);
        summary.style.display = "block";
    });
});
