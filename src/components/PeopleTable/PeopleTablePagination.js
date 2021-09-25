const LIMIT = 10;


export default function PeopleTablePagination({page, total, onChange = () => {}}) {

    const totalPages = Math.ceil(total/LIMIT)
    return (
        <div>
            {Array.from({length: totalPages}, ((_, index) => inde + 1 )
                .map(pageIndex => {
                    const isActive = pageIndex === page
                    return isActive ? (
                        <b>
                            {pageIndex}
                        </b>
                    ): (
                        <span>
                            {pageIndex}
                        </span>
                    )
                } )
            }
        </div>
    )
}