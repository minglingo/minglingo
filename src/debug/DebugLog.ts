
export default class DebugLog {
    constructor(public type: string = "debug", public message = "ok", public timestamp = Date.now()) {
    }
}