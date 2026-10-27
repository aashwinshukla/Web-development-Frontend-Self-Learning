import { cookies } from 'next/headers';
import React from 'react'

export default async function RecentlyViewedPost(){
    const cookiesStore = await cookies();
    
    return(
        <div>
            <h2>RecentlyViewedPost</h2>
            <ul></ul>
        </div>
    );
}