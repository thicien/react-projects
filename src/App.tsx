import type { FormEvent } from 'react';

function App() {
  function signUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");
    console.log({ email, password, employmentStatus });
  }
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue=""
          type="email"
          name="email"
          placeholder="mugisha@gmail.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue=""
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue=""
        />

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
const users = ["lines", " rooms", ]
export default App;