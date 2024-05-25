import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Layout from '../LayoutsHome/LayoutH';
import Preload from '../Preload';

const Profil = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/clients/${id}`);
        console.log("User profile data:", response.data);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (id) {
      fetchUserProfile();
    }
  }, [id]);

  if (!userProfile) {
    return <Preload />;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Your Profil</h2>
        <ul className="bg-white shadow-md p-6 rounded-md flex space-x-8">
          <img className="w-1/4 h-1/4 rounded-md" src={`http://localhost:8000/client/${userProfile.photo}`} alt="" />
          <li className="w-3/4">
            <p className="text-lg font-semibold">Nom: {userProfile.nom}</p>
            <p className="text-lg font-semibold">Prénom: {userProfile.prenom}</p>
            <p className='text-lg'>Telephone: {userProfile.telephone}</p>
            <p className='text-lg'>Sexe: {userProfile.sexe}</p>
            <p className='text-lg'>Nationalité: {userProfile.nationalite}</p>
            <p className='text-lg'>Adresse: {userProfile.adresse}</p>
            <p className='text-lg'>Ville: {userProfile.ville}</p>
          </li>
        </ul>
        <div className="flex space-x-3 mt-4">
          <Link to={`/modifier/${userProfile.id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Modifier</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Profil;
