// Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) =>
    expenses
        .filter( expense => {
            const startDateMatch = typeof startDate !== 'number'
                                || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number'
                                || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort( (a,b) =>
            (sortBy === 'date') ?
                b.createdAt - a.createdAt
                : (sortBy === 'amount') ?
                    b.amount - a.amount
                    : 0
        );