import React from 'react'

const Repo = ({repo}) => {
    return (
        <div>
            <li className="list-group-item"><i className="far fa-dot-circle"></i> <a className="text-decoration-none" href={repo.html_url}>{repo.name}</a></li>
        </div>
    )
}

export default Repo;
