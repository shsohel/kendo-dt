import { filterBy } from "@progress/kendo-data-query";
import { orderBy } from "@progress/kendo-react-data-tools";
import { Grid, GridColumn, GRID_COL_INDEX_ATTRIBUTE } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import React, { useMemo } from 'react';
import mock_data from '../assets/data/data.json';
import { DropdownFilterCell } from "./DropdownFilterCell";


const DetailComponent = ( props ) => {
    const dataItem = props.dataItem;
    return (
        <section>
            <p>He</p>
        </section>
    );
};

const DataTable = () => {
    const persons = useMemo( () => mock_data, [] )

    const createState = ( skip, take ) => {
        let pagerSettings = {
            buttonCount: 5,
            info: true,
            type: "numeric",
            pageSizes: true,
            previousNext: true,
        };
        return {
            items: persons.slice( skip, skip + take ),
            total: persons.length,
            skip: skip,
            pageSize: take,
            pageable: pagerSettings,
        };
    };

    const [state, setState] = React.useState( createState( 0, 10 ) );

    const pageChange = ( event ) => {
        console.log( ( event.page.skip + event.page.take ) / event.page.take )
        setState( createState( event.page.skip, event.page.take ) );
    };
    const [filter, setFilter] = React.useState( null );

    const filterChange = ( event ) => {
        console.log( event )
        setState( {
            ...state,
            skip: 0,
            pageSize: 10,
            items: filterBy( persons.map( p => ( { ...p, dateOfBirth: new Date( p.dateOfBirth ) } ) ), event.filter )
        } );
        setFilter( event.filter );
    };
    // console.log( 'state', JSON.stringify( state, null, 2 ) )
    console.log( new Date( "1996, 7, 12" ) )
    const filterOperators = {
        text: [
            {
                text: "grid.filterContainsOperator",
                operator: "contains",
            },
        ],
        numeric: [
            {
                text: "grid.filterEqOperator",
                operator: "eq",
            },
        ],
        date: [
            {
                text: "grid.filterEqOperator",
                operator: "eq",
            },
        ],
        boolean: [
            {
                text: "grid.filterEqOperator",
                operator: "eq",
            },
        ],
    };

    const countries = Array.from(
        new Set(
            persons.map( ( p ) => ( p.country ? p.country : "" ) )
        )
    );

    const CountryFilterCell = ( props ) => (
        <DropdownFilterCell
            {...props}
            data={countries}
            defaultItem={"Select category"}
        />
    );


    const expandChange = ( event ) => {
        let newData = state.items.map( ( item ) => {
            if ( item.id === event.dataItem.id ) {
                item.expanded = !event.dataItem.expanded;
            }
            return item;
        } );
        setState( {
            ...state,
            items: newData
        } );
    };

    const [sort, setSort] = React.useState( [
        {
            field: "name",
            dir: "desc",
        },
    ] );


    const [allowUnsort, setAllowUnsort] = React.useState( true );
    const [multiple, setMultiple] = React.useState( false );
    const sortChange = ( event ) => {
        setState( {
            ...state,
            skip: 0,
            pageSize: 10,
            items: orderBy( state.items, event.sort )
        } );
        setSort( event.sort );
    };

    const remove = () => {

    }
    const discard = () => {

    }
    const update = () => {

    }
    const enterEdit = () => {

    }
    const add = () => {

    }
    const cancel = () => {

    }
    const editField = () => {

    }

    const CustomCell = ( props ) => {
        const { className, style, colSpan, ariaColumnIndex, isSelected, columnIndex } = props;
        return (
            <td
                className={`${className} k-command-cell`}
                style={style}
                colSpan={colSpan}
                role={"gridcell"}
                aria-colindex={ariaColumnIndex}
                aria-selected={isSelected}
                {...{
                    [GRID_COL_INDEX_ATTRIBUTE]: columnIndex,
                }}

            >
                <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command"
                >Hello</button>
            </td>
        );
    };
    const MyCustomCell = ( props ) => <CustomCell {...props} />;
    return (
        <div>
            <Grid
                style={{
                    height: "510px",
                }}
                data={state.items}
                onPageChange={pageChange}
                total={state.total}
                skip={state.skip}
                pageable={state.pageable}
                pageSize={state.pageSize}
                reorderable
                resizable
                filterable
                filter={filter}
                onFilterChange={filterChange}
                filterOperators={filterOperators}
                detail={DetailComponent}
                expandField="expanded"
                onExpandChange={expandChange}
                editField=""
                sortable={{
                    allowUnsort: allowUnsort,
                    mode: multiple ? "multiple" : "single",
                }}
                sort={sort}
                onSortChange={sortChange}
            >
                <GridColumn
                    filterable={false}
                    width="160px"
                    locked
                    resizable={false}
                    field="id" cell={MyCustomCell}

                />
                <GridColumn filterable={false} locked field="id" title="ID" width="50px" />
                <GridColumn locked field="firstName" title="Name" width="250px" />
                <GridColumn field="email" title="Email" width="250px" />
                <GridColumn field="gender" title="Gender" width="150px" />
                <GridColumn filter="date" format="{0:d}" field="dateOfBirth" title="Birth Date" width="150px" />
                <GridColumn field="phoneNumber" title="Phone" width="150px" />
                <GridColumn field="state" title="State" width="150px" />
                <GridColumn field="postalCode" title="Postal Code" width="150px" />
                <GridColumn
                    field="country"
                    title="Country"
                    width="150px"
                    filterCell={CountryFilterCell}
                />
                <GridColumn field="university" title="University" width="450px" />
            </Grid>
        </div>
    )
}

export default DataTable