import moment from 'moment';

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  //console.log('selectFilter ',expenses)
  return expenses.filter((expense) => {
    const createedAtMoment = moment(expense.createedAt);
    // const startDateMatch = startDate ? startDate.isSameOrBefore(createedAtMoment, 'day') : true;
    const startDateMatch =  true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createedAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
   // console.log("createedAtMoment "+createedAtMoment+"startDateMatch ",startDateMatch+"endDateMatch ",endDateMatch+"textMatch"+textMatch)

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createedAt < b.createedAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};