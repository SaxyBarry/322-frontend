import "../styles/TextInput.css";
function TextInput() {
  return (
    <div className="TextInput">
      <form>
        <input className="textarea" type="text" name="chatbox" />
        <input className="submitBtn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TextInput;
