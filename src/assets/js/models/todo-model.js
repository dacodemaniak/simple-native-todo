export class TodoModel {
    constructor() {
        this._id = 0;
        this._title = '';
        this._detail = '';
        this._date = new Date();
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get detail() {
        return this._detail;
    }

    set detail(detail) {
        this._detail = detail;
    }
    
    get date() {
        return this._date;
    }

    set date(dateString) {
        this._date = new Date(dateString);
    }
}