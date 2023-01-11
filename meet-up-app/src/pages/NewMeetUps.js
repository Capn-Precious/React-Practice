import { useNavigate } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'insert-firebase-url-here/meetups.json',
            {
                    method: 'POST',
                    body: JSON.stringify(meetupData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
            }
        ).then(() => {
            navigate('/')
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler()} />
    </section>
}


export default NewMeetUpsPage;
