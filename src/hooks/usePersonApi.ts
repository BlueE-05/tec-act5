'use client'

import { useEffect, useState } from "react";
import { Person } from "@/types/person";
import { PeopleResponse } from "@/types/http/people.response";

export const usePeopleApi = () => {
    const [currentPerson, setPerson] = useState<Person | null>(null)
    const [personHistory, setPersonHistory] = useState<Person[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: PeopleResponse = await response.json();
            const personData = data.results[0];
            const person: Person = {
                profile_pic: personData.picture.large,
                name: `${personData.name.first} ${personData.name.last}`,
                phone: personData.phone,
                email: personData.email,
                birthday: personData.dob.date.split('T')[0],
                age: personData.dob.age,
                address: `${personData.location.street.number} ${personData.location.street.name}, ${personData.location.city}, ${personData.location.state}, ${personData.location.country}`,
                userName: personData.login.username,
                password: personData.login.password
            };
            setPerson(person)
            setPersonHistory((personList) => [...personList, person])
        } catch (err) {
            setError( err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {currentPerson, personHistory, loading, error, fetchData}
}