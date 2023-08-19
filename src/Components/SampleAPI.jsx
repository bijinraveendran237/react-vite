import React from 'react';
import useFetchData from '../hooks/useFetchData';
import api from '../services/api';

function SampleAPI() {
    const { data: posts, isLoading } = useFetchData(api.fetchUsers);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div class="space-y-12 py-10 ">
                    {posts.map(post => (
                        <div class="grid border  grid-cols-5 pt-5 rounded-lg shadow-lg shadow-emerald-200 border-white border-t-50 border-l-50 hover:rounded">
                            <div class="translate-y-4 pl-8"> </div>
                            <h3 class="text-center text-white py-3 col-end-4 pl-2">{post.name}</h3>
                            <h3 class="text-center text-white py-3 col-end-4 pl-2">{post.email}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


export default SampleAPI