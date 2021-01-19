import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
const AdminIndex = () =>{
    return (
        <Layout>
        <Admin>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="col-md-4">
                        <ul class="list-group">
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create Category</a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create Tags</a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <a href="/admin/crud/blog">Create Blog</a>
                            </li>

                            <li className="list-group-item">
                                
                                <a href="/admin/crud/blogs">Update/Delete Blog</a>
                                
                            </li>

                            <li className="list-group-item">
                                
                                <a href="/user/update">Update Profile</a>
                                
                            </li>
                             
                        </ul>
                    </div>
                    <div className="col-md-8">right</div>
                </div>
            </div>
        </Admin>
    </Layout>
    );
} 

export default AdminIndex;