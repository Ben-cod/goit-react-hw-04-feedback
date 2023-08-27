// export class App extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// addFeedback = option => {
//   this.setState(prevState => {
//     return {
//       [option]: prevState[option] + 1,
//     };
//   });
// };

// countTotalFeedback = () => {
//   return Object.values(this.state).reduce((acc, value) => acc + value);
// };

// countPositiveFeedbackPercentage = () => {
//   if (this.countTotalFeedback() === 0) {
//     return 0;
//   }
//   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// };

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//           flexDirection: 'column',
//         }}
//       >
//         <Section
//           title="Please leave feedback"
//           style={{ backgroundColor: 'green' }}
//         >
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>

//         <Section title="Statistics" style={{ backgroundColor: 'yellow' }}>
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
//}
