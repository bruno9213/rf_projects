import './Form.css';

function Form(props) {
    return (
        <form className='formBox' method="get">
          <div className='formTitle'>Contact page</div>
        
          <div className='formHeader'>Full name</div>
          <input className='formInput'></input>

          <div className='formHeader'>Email address</div>
          <input className='formInput'></input>

          <div className='formHeader'>How can we help you?</div>
          <select className='formInput' name="help" id="help">
            <option value="project_help">Need help with a project</option>
            <option value="script_help">Need a bot or script to automate a boring task</option>
            <option value="learn_help">Want to learn more about RF Projects</option>
          </select>

          <div className='formHeader'>Additional info</div>
          <input className='formInput'></input>

          <input className='btn' type="submit" name="next"></input>
        </form>
      )
  }


export default Form;