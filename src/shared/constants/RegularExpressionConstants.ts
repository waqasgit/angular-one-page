export class RegularExpressionConstants {
    //numbers allowed only
    public readonly Numeric = /^[0-9]*$/;

    public readonly Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/;

    //alphabets, numbers, - _ allowed
    public readonly Username = /^[A-Za-z0-9_-]*$/;

    //no space at start or end of string
    public readonly NoSpaceAtStartAndEnd = /^[^\s]+(\s+[^\s]+)*$/;

    //alphabets, numbers
    public readonly AlphaNumeric = /^[a-zA-Z0-9]*$/;

    //Alphabets and Numbers with Characters . _ - , / &,
    //No white space at start or end OR empty input
    // '/u' is appened for unicode support
    public readonly Name = /^[^\s]+(\s+[a-zA-Z0-9.\/_,&-]+)*$/;
}