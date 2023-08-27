import { Section } from './Section/Section.js';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.js';
import { Statistics } from './Statistics/Statistics.js';
import { Notification } from './Notification/Notification.js';

import 'normalize.css';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const feadbackName = ['good', 'neutral', 'bad'];

  const addFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section
        title="Please leave feedback"
        style={{ backgroundColor: 'green' }}
      >
        <FeedbackOptions options={feadbackName} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Statistics" style={{ backgroundColor: 'yellow' }}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
