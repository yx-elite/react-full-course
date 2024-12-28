import { DataContext, Data2Context } from "../App";

const ComponentC = () => {
  return (
    <div>
      <h1>ComponentC</h1>
      <DataContext.Consumer>
        {(name) => {
          return (
            <Data2Context.Consumer>
              {(age) => (
                <p>
                  Name: {name} Age: {age}
                </p>
              )}
            </Data2Context.Consumer>
          );
        }}
      </DataContext.Consumer>
    </div>
  );
};

export default ComponentC;
