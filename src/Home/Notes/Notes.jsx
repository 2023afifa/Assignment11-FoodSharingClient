import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Notes = () => {
    const { user } = useContext(AuthContext);

    const handleNote = e => {
        e.preventDefault();
        const form = e.target;
        const note = form.note.value;
        const name = user.displayName;
        const email = user.email;
        const photo = user.photoURL;

        const newNote = { note, name, email, photo };
        console.log(newNote);

        fetch("http://localhost:5000/note", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newNote)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Added the note successfully");
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>ShareWithHeart | Notes</title>
            </Helmet>
            <Navbar></Navbar>
            <h2 className="text-center text-2xl font-bold mb-6">Thank you Notes</h2>
            <div className="py-5 px-20 bg-rose-200 w-1/2 rounded mx-auto mb-10">
                <h3 className="text-rose-500 text-xl font-medium mb-3">Leave some comment...</h3>
                <form onSubmit={handleNote}>
                    <textarea className="textarea w-full h-60" name='note' placeholder="Note"></textarea>
                    <input type="submit" value="Submit" className="btn bg-rose-700 text-rose-200 mt-3" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Notes;