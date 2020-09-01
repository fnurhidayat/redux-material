import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Person from '../../Person'
import * as API from '../../../actions/person'

/* Fungsi ini kita pakai untuk melakukan
 * Mapping dari Store ke props dari component
 * */
const mapStateToProps = state => ({
  /* State adalah store dari redux
   * Dan persons, adalah nama reducer kita
   * Yang sudah kita daftarkan melalui
   * combineReducers
   * */
  data: state.persons
})

/* Memasang action creator yang sudah
 * kita definisikan di dalam actions/*
 * */
const mapDispatchToProps = {
  getAllPerson: API.getAllPerson,
  addPerson: API.addPerson
}

class PersonContainer extends Component {
  componentDidMount() {
    this.props.getAllPerson()
  }

  createCard = personProps => (
    <Col xs={4}>
      <Person {...personProps} />
    </Col>
  )

  createRow = rows => (
    <Row key={`${Math.random()}-${Date.now()}`} className="my-4">
      {rows.map(i => this.createCard(Object.assign(i, { key: i.id })))}
    </Row>
  )

  render() {
    const { data } = this.props
    const contents = []

    // Slice each 3 item of data
    for (let i = 0; i < data.length; i += 3) {
      contents.push(data.slice(i, i + 3))
    }

    return <Container fluid className="p-4">{contents.map(i => this.createRow(i))}</Container>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer)
