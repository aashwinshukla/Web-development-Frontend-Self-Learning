import Student from './Student.jsx'

function App() {

  return(
    <>
      <Student name = "Aashwin" age = {19} isStudent = {true}/>
      <Student name = "Mike" age = {25} isStudent = {false}/>
      <Student name = "Shubham" age = "21" isStudent = {true}/>
      <Student/>
    </>
  );
}

export default App
