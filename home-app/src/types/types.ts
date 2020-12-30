export interface ITransportData {
    departure_time: String,
    arrival_time: String,
    line: String,
    travel_time: String,
    transport_type: String,
    date: String
}

export interface IResponse {
    data: ITransportData
}