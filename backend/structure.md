**ENDPOINTS:**

**Main API**
    [/transactions] -> Data about transactions: income and expenses
        GET [/transactions/{userID}] -> Get the transactions of a given user
        GET [/transactions/{transactionID}] -> Get a transaction by its ID 
        POST [/transactions/{userID}] -> Create a new transaction
        DELETE [/transactions/{transactionID}] -> Delete a transaction from history
        PUT [/transactions/{transactionID}] -> Update / Change transaction data

    [/tips] -> personalized economy tips
        GET [/tips?limit={n}] -> Get n number of tips (maximum 10)

    [/history] -> the history of all transactions
        GET [/history/{userID}?period={key}] -> Get the history of user transactions
                                                in a period of key (day | month | year)

**Auth**
    [/auth] -> The route for authentication
        POST [/auth/login] -> User login
        POST [/auth/register] -> User registration

**DATABASE:**

**Tables**
    [transactions]
        Model: [Transaction] -> {
            id: UID,
            userID: UID,
            timestamp: string,
            type: "income" | "expense",
            amount: number,
            category: string
        }
    [tips]
        Model: [Tip] -> {
            id: UID,
            content: string
        }
    [users]
        Model: [User] -> {
            id: UID,
            email: string,
            username: string,
            passwordHash: string,
            role: "admin" | "user"
        }
