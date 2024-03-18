const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*", credentials: true }));
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/bfhl", (req, res) => {
	try {
		const user = "AnamSood_29092002";
		const userEmail = "anam1634.be21@chitkara.edu.in";
		const collegeRollNumber = "2110991634";

		// Updated error handling for inputArray
		const inputArray = req.body.data || [];
		const evenNumbers = inputArray.filter((num) => !isNaN(num) && num % 2 === 0);
		const oddNumbers = inputArray.filter((num) => !isNaN(num) && num % 2 !== 0);
		const alphabetArray = inputArray
			.filter((char) => /^[a-zA-Z]$/.test(char))
			.map((char) => char.toUpperCase());

		console.log(evenNumbers, inputArray);

		const response = {
			is_success: true,
			user_id: user,
			email: userEmail,
			roll_number: collegeRollNumber,
			odd_numbers: oddNumbers,
			even_numbers: evenNumbers,
			alphabets: alphabetArray,
		};

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message, is_success: false });
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
