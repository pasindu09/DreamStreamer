import React, { useState, useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

export default function AuthUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUserAttributes() {
            try {
                const userAttributes = await fetchUserAttributes();
                console.log('User Attributes:', userAttributes);
                setUser(userAttributes);
            } catch (err) {
                console.error('Error fetching user attributes:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getUserAttributes();
    }, []);

   
}
