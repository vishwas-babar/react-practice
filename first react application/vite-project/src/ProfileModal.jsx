import { useState } from "react"

function ProfileModal() {
    return (
        <form method="post" action="/api/v1.0.0/user/register" encType="multipart/form-data" className="flex flex-col w-64 h-fit mx-auto mt-10 gap-3">
            <label htmlFor="avtar">avtar: </label>
            <input name="avtar" type="file" placeholder="add your avtar here" />

            <label htmlFor="coverImage">coverImage: </label>
            <input name="coverImage" type="file" placeholder="coverImage" />

            <input name="fullName" type="text" placeholder="full name" />
            <input name="userId" type="text" placeholder="user id" />
            <input name="email" type="email" placeholder="email" />
            <input name="password" type="password" placeholder="password" />

            <button role="button" type="submit" className="px-4 py-2 rounded-md shadow-md bg-black text-white">submit</button>
        </form>
    );
}

export default ProfileModal;