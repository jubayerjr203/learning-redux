import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../postSlice";
const init = {
  title: "",
  dec: "",
};
const PostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [State, setState] = useState({
    ...init,
  });
  const [userId, setuserId] = useState("");

  const henddelChenge = (ev) => {
    const { name, value } = ev.target;
    setState((preve) => ({
      ...preve,
      [name]: value,
    }));
  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(State));
    setState(init);
  };
  const hendelAoutherCngd = (e) => {
    setuserId(e.target.value);
  };

  return (
    <form>
      <input
        value={State.title}
        type="text"
        placeholder="enter title"
        name="title"
        onChange={(e) => henddelChenge(e)}
      />
      <textarea
        name="dec"
        cols="30"
        rows="10"
        value={State.dec}
        placeholder="enter ur des"
        onChange={(e) => henddelChenge(e)}
      ></textarea>

      <select name="user" value={userId}>
        <option value="">select aouther</option>
        {users.map((aut) => (
          <option value={aut.id}>{aut.name}</option>
        ))}
      </select>

      <button onClick={hendelSubmit} type="submit">
        add post
      </button>
    </form>
  );
};

export default PostForm;
