import { NextPage } from 'next';
import Navbar from '../../components/Navbar';
import CreatePost from '../../components/create-post/CreatePost';

const CreatePostPage: NextPage = () => (
  <>
    <Navbar />
    <CreatePost />
  </>
);

export default CreatePostPage;
