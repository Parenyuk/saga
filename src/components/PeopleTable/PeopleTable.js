import React from 'react';
import {useSelector} from "react-redux";
import {selectPeople} from "../../redux/reducers/people/selectors";

const PeopleTable = () => {

    const people = useSelector(selectPeople)

    return (
        <>
            {people.loading ? (
                <div>
                    Loading...
                </div>) : (<table border={1} width='100%' cellPadding={2} cellSpacing={1}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth year</th>
                    <th>Eye color</th>
                    <th>Gender</th>
                    <th>Hair color</th>
                    <th>Height</th>
                </tr>
                </thead>
                <tbody>{people?.data?.results.map((p, i) => {
                    return (
                        <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.birth_year}</td>
                            <td>{p.eye_color}</td>
                            <td>{p.gender}</td>
                            <td>{p.hair_color}</td>
                            <td>{p.height}</td>
                        </tr>
                    )
                })}</tbody>
            </table>)
            }
        </>
    );
};

export default PeopleTable;