import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../LayoutsHome/LayoutH';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const ModifierProfil = () => {
  const { id } = useParams();
  const [User, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const userRole = localStorage.getItem("userRole");
  


  useEffect(() => {
    axios.get(`http://localhost:8000/api/clients/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des détails de l'utilisateur à modifier :", error);
      });
  }, [id]);

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveButtonClick = () => {
    axios.put(`http://localhost:8000/api/clients/${id}`, User)
      .then(response => {
        console.log("Server response:", response.data);
        setUser(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error("Error modifying user details:", error);
      });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    const formData = new FormData();
    formData.append('photo', selectedFile);
    
    axios.post(`http://localhost:8000/api/clients/${id}/upload-photo`, formData)
      .then(response => {
        console.log("Server response:", response.data);
        // Mettre à jour l'URL de la photo dans l'état local
        setUser(prevState => ({
          ...prevState,
          photo: response.data.photoUrl
        }));
      })
      .catch(error => {
        console.error("Error uploading photo:", error);
      });
  };
  return (
    <Layout>
      <form className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profil</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            Ces informations ne seront pas affichées publiquement.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                <img className="h-12 w-12 border rounded-full " src={User.photo ? `http://localhost:8000/client/${User.photo}` : <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />} alt={`${User.nom} ${User.prenom}`} />
                <input type="file" onChange={handleFileChange} />
                  <button
                   onClick={handleUploadClick}
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Changer
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="Nom" className="block text-sm font-medium leading-6 text-gray-900">
                  Nom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">
                  Prenom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="nationalite" className="block text-sm font-medium leading-6 text-gray-900">
                  Nationalite
                </label>
                <div className="mt-2">
                  <select
                    id="nationalite"
                    name="nationalite"
                    autoComplete="nationalite-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Morocco</option>
                    <option>Canada</option>
                    <option>France</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-900">
                  Adresse
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="adresse"
                    id="adresse"
                    autoComplete="adresse"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="ville" className="block text-sm font-medium leading-6 text-gray-900">
                  Ville
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="ville"
                    id="ville"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                  Sexe
                </label>
                <div className="mt-2 flex items-center gap-2">
      <div className="flex items-center">
        <input
          type="radio"
          id="sexe-male"
          name="sexe"
          value="male"
          checked={User.sexe === "male"}
          onChange={handleEditInputChange}
          className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="sexe-male" className="ml-2">Male</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="sexe-female"
          name="sexe"
          value="female"
          checked={User.sexe === "female"}
          onChange={handleEditInputChange}
          className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="sexe-female" className="ml-2">Female</label>
      </div>
              </div>
</div>
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Annuler
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default ModifierProfil;


















































// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import Layout from '../LayoutsHome/LayoutH';

// const ModifierProfil = () => {
//   const { id } = useParams();
//   const [User, setUser] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const userRole = localStorage.getItem("userRole");
  


//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/clients/${id}`)
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(error => {
//         console.error("Erreur lors de la récupération des détails de l'utilisateur à modifier :", error);
//       });
//   }, [id]);

//   const handleEditInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleEditButtonClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveButtonClick = () => {
//     axios.put(`http://localhost:8000/api/clients/${id}`, User)
//       .then(response => {
//         console.log("Server response:", response.data);
//         setUser(response.data);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error("Error modifying user details:", error);
//       });
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUploadClick = () => {
//     const formData = new FormData();
//     formData.append('photo', selectedFile);
    
//     axios.post(`http://localhost:8000/api/clients/${id}/upload-photo`, formData)
//       .then(response => {
//         console.log("Server response:", response.data);
//         // Mettre à jour l'URL de la photo dans l'état local
//         setUser(prevState => ({
//           ...prevState,
//           photo: response.data.photoUrl
//         }));
//       })
//       .catch(error => {
//         console.error("Error uploading photo:", error);
//       });
//   };

//   return (
//     <Layout>
//       <div className="max-w-4xl mx-auto p-8">
//         <h2 className="text-3xl font-semibold mb-4">Modifier l'utilisateur</h2>
//         <ul className="bg-white shadow-md p-6 rounded-md flex space-x-8">
//           <img className="w-1/4 h-1/4 rounded-md" src={User.photo ? `http://localhost:8000/client/${User.photo}` : 'placeholder.jpg'} alt={`${User.nom} ${User.prenom}`} />
//           <li className="w-3/4">
//             <p className="text-lg font-semibold">Nom: {isEditing ? <input type="text" name="nom" value={User.nom} onChange={handleEditInputChange} /> : User.nom}</p>
//             <p className="text-lg font-semibold">Prénom: {isEditing ? <input type="text" name="prenom" value={User.prenom} onChange={handleEditInputChange} /> : User.prenom}</p>
//             <p className='text-lg'>Telephone: {isEditing ? <input type="text" name="telephone" value={User.telephone} onChange={handleEditInputChange} /> : User.telephone}</p>
//             <p className='text-lg'>Sexe: {isEditing ? <input type="text" name="sexe" value={User.sexe} onChange={handleEditInputChange} /> : User.sexe}</p>
//             <p className='text-lg'>Nationalité: {isEditing ? <input type="text" name="nationalite" value={User.nationalite} onChange={handleEditInputChange} /> : User.nationalite}</p>
//             <p className='text-lg'>Adresse: {isEditing ? <input type="text" name="adresse" value={User.adresse} onChange={handleEditInputChange} /> : User.adresse}</p>
//             <p className='text-lg'>Ville: {isEditing ? <input type="text" name="ville" value={User.ville} onChange={handleEditInputChange} /> : User.ville}</p>
//           </li>
//         </ul>
//         <div className="mt-4">
//           {isEditing ? (
//             <>
//               <input type="file" onChange={handleFileChange} />
//               <button onClick={handleUploadClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">
//                 Télécharger
//               </button>
//               <button onClick={handleSaveButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">
//                 Enregistrer les modifications
//               </button>
//             </>
//           ) : (
//             <button onClick={handleEditButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">
//               Modifier
//             </button>
//           )}
//           <Link to={`/profil/${User.id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block ml-4">Annuler</Link>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default ModifierProfil;
