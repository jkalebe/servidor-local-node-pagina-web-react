import React, {Component} from 'react'
const $ = require ('jquery')
$.DataTable = require('datatables.net')
require ('datatables.net-dt/css/jquery.dataTables.css');
require ('datatables.net-dt/css/jquery.dataTables.min.css');
const columns = [
    {title: 'Name', data: 'name'},
    {title: 'Idade', data: 'idade'},
    {title: 'CPF', data: 'cpf'},
    {title: 'Data Nasc', data: 'data_nasc'},
]

class DataTableComp extends Component {
    constructor (props){
        super(props)
    }

    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable({
            dom:'<"data-table-wrapper"t>',
            data: this.props.data,
            columns: columns,
            ordering: false,
            language: {emptyTable: 'Search a name'}
        });
    }

    componentWillUnmount() {
        $(".data-table-wrapper").find("table").DataTable().destroy(true)
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.data !== this.props.data){
            this.reloadTableData(nextProps.data)
        }
        return false;
    }

    reloadTableData = (data) =>{
        const table = $('.data-table-wrapper')
                        .find('table')
                        .DataTable();
                        table.clear();
                        table.rows.add(data);
                        table.draw();
    }

    render(){
        return(
            <div>
                <table
                    className="table table-borderless display compact cell-border dt-body-center"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                    ref={ (el) => (this.el = el)}
                />
            </div>
        )
    }
}

export default DataTableComp;