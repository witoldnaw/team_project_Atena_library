
export const FormRegister = ({ submitText, onSubmit }) => (
  
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Podaj email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="name">Imie</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="surname">Nazwisko</label>
        <input type="text" name="surname" id="surname" />
      </div>
      <div>
        <label htmlFor="description">Napisz coś o sobie</label>
        <input type="text" name="description" id="description" />
      </div>
        <div>
          <label htmlFor="password">Podaj hasło</label>
          <input type="password" name="password" id="password" />
        </div>
      <button>{submitText}</button>
    </form>
    
  )