const Greetings = ({ timeOfDay }) => {
  return (
    <div>
      {timeOfDay === "morning" ? (
        <h1>Good Morning</h1>
      ) : timeOfDay === "afternoon" ? (
        <h1>Good Afternoon</h1>
      ) : (
        <h1>Good Evening</h1>
      )}
    </div>
  );
};

export default Greetings;
