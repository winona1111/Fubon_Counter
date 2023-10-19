var version = "8.0.4";
/*
 *****************************************************************************
 * 							zh-HK.js (Cantonese HK)
 * ---------------------------------------------------------------------------
 * 	
 * 
 * 	Other locales may need adjustments or further enhancements. 
 * 	The function names must be unique across all JS files.
 * 	(See the corresponding locale JS file. e.g. fr-FR.js/es-MX/etc.)
 * 
 * 	IMPORTANT:
 *  1) The main function name must be of the format:  xxXXPlayBuiltinType
 *  Where 'xxXX' is the locale ID without the hyphen. 
 *  i.e. en-US -> enUSPlayBuiltinType()
 * 
 * 	2) This locale file must be located under its locale folder with the same 
 * 	locale ID name.
 * 	i.e. '../en-US/en-US.js'
 * 
 * 	Note: Do not put any comments as the starting line.
 *****************************************************************************
 */

/**
 * The base URL that is prepended to the URLs for all audio files.
 */
var speakCurrency = false;
var promptBaseUrl = "../Resources/Prompts/zh-TW/";


/**
 * Default audio file extension
 */
var audioFileExtension = ".wav";

/**
 * Dummy class to hold constants
 */
function zhTWFormat() {}
new zhTWFormat();
/*
 * These flags may be bitwise OR'd together to specify the date output format
 */
/**
 * Flag to speak the month
 */ 
zhTWFormat.prototype.SPEAK_MONTH = 1;
/**
 * Flag to speak the day
 */
zhTWFormat.prototype.SPEAK_DAY = 2;
/**
 * Flag to speak both month and day.  This is a shortcut for
 * f.SPEAK_MONTH | f.speak_DAY
 */
zhTWFormat.prototype.SPEAK_MONTH_AND_DAY = 3;
/**
 * Flag to speak the year
 */
zhTWFormat.prototype.SPEAK_YEAR = 4;
/**
 * Flag to speak the day of the week
 */
zhTWFormat.prototype.SPEAK_DAY_OF_WEEK = 8;

/**
 * Translates the value of the specified type into an array of
 * vox file URLs.  The array is a list of vox files that when
 * played in succession will represent the value of the specified
 * type in a locale-specific manner.  The following types are
 * supported:
 *
 * <table>
 * <tr><td>"boolean"</td><td>"true" or "false"</td></tr>
 * <tr><td>"date"</td><td>YYYYMMDD<br>Unspecified fields may
 *                                   be replaced by "??" or "????"</td></tr>
 * <tr><td>"digits"</td><td>A string of 0 or more characters [0-9]</td></tr>
 * <tr><td>"currency"</td><td>UUUMM.NN<br>Where UUU is the ISO4217 currency
 *                            code.  The currency code may be omitted, in
 *                            which case, the default currency for the
 *                            current locale will be used.</td></tr>
 * <tr><td>"number"</td><td>Positive or negative, integer or decimal
 *                          number</td></tr>
 * <tr><td>"phone"</td><td>Sequence of digits [0-9], optionally followed
 *                         by an "x" and extension digits [0-9]</td></tr>
 * <tr><td>"time"</td><td>hhmm[aph?]<br>"a" means AM, "p" means PM,
 *                        h means 24 hour, and ? means ambiguous</td></tr>
 * <tr><td>"ordinal"</td><td>A positive integer</td></tr>
 * <tr><td>"alphanumeric"</td><td>A string of digits [0-9] and US-ASCII
 *                                characters [A-Za-z]</td></tr>
 * <tr><td>"dtmf"</td><td>A string of zero or more DTMF characters
 *                        [0-9A-D*#]</td></tr>
 *
 * @param value The value to translate.
 * @param type The type of the value.
 * @param promptUrl The base URL that is prepended to the URLs for all audio files [optional].
 * @param format The output format [optional].
 * @return An array of URL strings.
 */
function zhTWPlayBuiltinType(value, type, promptUrl, format)
{
    type = type.toLowerCase();
    // Sets the new base URL that is prepended to the URLs for all audio files.
    if (!(typeof promptUrl == 'undefined'))
    	promptBaseUrl = promptUrl;
    
    var format;
	speakCurrency = false; 
    
    switch (type) {
        case 'boolean':
            return zhTWbooleanPrompts(value);
        case 'date':
            return zhTWdatePrompts(value, format);
        case 'digits':
            return zhTWalphanumericPrompts(value);
        case 'currency':
            return zhTWcurrencyPrompts(value);
        case 'number':
            return zhTWcardinalPrompts(value);
        case 'phone':
            return zhTWphonePrompts(value);
        case 'time':
            return zhTWtimePrompts(value);
        case 'ordinal':
            return zhTWordinalPrompts(value);
        case 'alphanumeric':
            return zhTWalphanumericPrompts(value);
        case 'dtmf':
            return zhTWdtmfPrompts(value);
        default:
            return void 0;
    }
}
function zhTWbooleanPrompts(value)
{
    var promptsArray = new Array(1);
    if (value) {
        promptsArray[0] = promptBaseUrl + "miscellaneous/true" + audioFileExtension;
    } else {
        promptsArray[0] = promptBaseUrl + "miscellaneous/false" + audioFileExtension;
    }
    return promptsArray;
}
/**
 * Translates the date value into an array of vox file URLs
 * for playing the date.  The date must be in the ISO-8601
 * condensed format of YYYYMMDD.  One or more fields may be
 * left unspecified by substituting question mark characters
 * ("?") for a numeric value.  Output format will be in a
 * locale-specific ordering.   The format specification can
 * modify which fields are spoken.  If no format specification
 * parameter is given, the month and day are spoken.  Otherwise,
 * the date fields specified in the format specification will be
 * spoken.  Each output field is represented by a constant in the
 * Format class.  Multiple output fields are specified by 
 * bitwise OR'ing the appropriate constants.
 *
 * <pre>
 * Format f = new Format();
 * PlayBuiltinType("20020823", "date", f.SPEAK_MONTH |
 *                                     f.SPEAK_DAY |
 *                                     f.SPEAK_YEAR |
 *                                     f.SPEAK_DAY_OF_WEEK);
 * </pre>
 *
 * @param value The date in YYYYMMDD format.
 * @param format An optional format specification
 * @return An array of URL strings.
 */
function zhTWdatePrompts(value, format)
{
    if ((value == "") || (value == "00000000"))
    {
        var promptsArray = new Array(1);
        promptsArray[0] = promptBaseUrl + "miscellaneous/00000" + audioFileExtension;
        return promptsArray;
    }

    var f = new zhTWFormat();
	var year = "", month = "", day = "";
    var speakMonth = true, speakDay = true, speakYear = true, speakDayOfWeek = false;

	if (value.length == 4)
    {
		speakYear = false;
        month = value.substring(0, 2);
        day = value.substring(2, 4);
    }
	else if (value.length == 6)
	{
        year = "20" + value.substring(0, 2);
        month = value.substring(2, 4);
        day = value.substring(4, 6);
	}
	else
	{
        year = value.substring(0, 4);
        month = value.substring(4, 6);
        day = value.substring(6, 8);
	}

    if (day.substring(0, 1) == "0") {
        day = day.substring(1, 2);
    }
    var yearKnown = !(year == "????");
    var monthKnown = !(month == "??");
    var dayKnown = !(day == "??");
    if ((!yearKnown && !monthKnown && !dayKnown) ||
        (yearKnown && !monthKnown && dayKnown)) {
        return void 0;
    }
    var promptsArray;
    if (!yearKnown && !monthKnown && dayKnown) {
        promptsArray = new Array();
        /* In US English, a date phrase containing only the
         * day of the month begins with a definite article.
         */
        /* In US English, if the word following a definite article
         * begins with a vowel, the definite article is pronounced
         * "THEE".  If the word following the definite article 
         * begins with a consonant, the definite article is
         * pronounced "THUH".
         */
        if (speakDay) {
            if (day == 8 || day == 11 || day == 18) {
                promptsArray.push(promptBaseUrl + "miscellaneous/the1" + audioFileExtension);
            } else {
                promptsArray.push(promptBaseUrl + "miscellaneous/the2" + audioFileExtension);
            }
            promptsArray = promptsArray.concat(zhTWordinalPrompts(day));
            return promptsArray;
        } else {
            return void 0;
        }
    }
    if (yearKnown && !monthKnown && !dayKnown) {
        if (speakYear) {
            return zhTWyearPrompts(year);
        } else {
            return void 0;
        }
    }
    
    if (!yearKnown && monthKnown && !dayKnown) {
        if (speakMonth) {
            return zhTWmonthPrompts(month);
        } else {
            return void 0;
        }
    }
    if (yearKnown && monthKnown && !dayKnown) {
        promptsArray = new Array();
        if (speakMonth) {
            promptsArray = promptsArray.concat(zhTWmonthPrompts(month));
        }
        if (speakYear) {
            promptsArray = promptsArray.concat(zhTWyearPrompts(year));
        }
        if (promptsArray.length > 0) {
            return promptsArray;
        } else {
            return void 0;
        }
    }
    if (!yearKnown && monthKnown && dayKnown) {
        promptsArray = new Array();
        if (speakMonth) {
            promptsArray = promptsArray.concat(zhTWmonthPrompts(month));
        }
        if (speakDay) {
            promptsArray = promptsArray.concat(zhTWfourDigitsPrompts(day));
            promptsArray.push(promptBaseUrl + "miscellaneous/day" + audioFileExtension);
        }
        if (promptsArray.length > 0) {
            return promptsArray;
        } else {
            return void 0;
        }
    }
    if (yearKnown && monthKnown && dayKnown) {
        promptsArray = new Array();
        if (speakDayOfWeek) {
            // JavaScript months are 0-indexed.
            var date = new Date(year, month - 1, day);
            var dayOfWeek = date.getDay();
            promptsArray = promptsArray.concat(zhTWdayOfWeekPrompts(dayOfWeek));
        }
        if (speakYear) {
            promptsArray = promptsArray.concat(zhTWalphanumericPrompts(year));
            promptsArray = promptsArray.concat(promptBaseUrl + "miscellaneous/year" + audioFileExtension);
        }

        if (speakMonth) {
            promptsArray = promptsArray.concat(zhTWmonthPrompts(month));
        }
        if (speakDay) {
            promptsArray = promptsArray.concat(zhTWfourDigitsPrompts(day));
            promptsArray.push(promptBaseUrl + "miscellaneous/day" + audioFileExtension);
        }

        if (promptsArray.length > 0) {
            return promptsArray;
        } else {
            return void 0;
        }
    }
}
/**
 * Translates the currency value into an array of vox file URLs
 * for playing the currency.  The currency amount must be a number
 * which may contain either a whole number part, or a decimal part, or
 * both, and is optionally preceeded by a currency specifier.  The
 * currency specifier may either be an ISO-4217 currency code, e.g.
 * USD, EUR, JPY, CHF, CAD, GBP, or MXN, or it may be one of the
 * following currency symbols: $ = USD, &#163; = GBP, &#8364; = EUR,
 * &#165; = JPY.  If no currency is specified, the currency of the
 * current locale will be used, e.g. USD for en-US, and EUR for fr-FR.
 *
 * @param value The currency amount.
 * @return An array of URL strings.
 */
function zhTWcurrencyPrompts(value)
{
    var currency;
    var valueStart;
    var decimalPoint;
    var fraction;
    var amount;
    if (value.charAt(0) == "$") {
        currency = "USD";
        valueStart = 1;
    } else if (value.charAt(0) == "\u00A3") {
        currency = "GBP";
        valueStart = 1;
    } else if (value.charAt(0) == "\u00A5") {
        currency = "JPY";
        valueStart = 1;
    } else if (value.charAt(0) == "\u20AC" || value.charAt(0) === "\u0080") {
        currency = "EUR";
        valueStart = 1;
    } else if (value.substring(0, 3).match(/^[A-Za-z][A-Za-z][A-Za-z]$/)) {
       currency = value.substring(0, 3);
       valueStart = 3;
    } else {
       currency = "USD";
       valueStart = 0;
    }
    decimalPoint = value.indexOf(".");
    if (decimalPoint == -1) {
        amount = value.substring(valueStart);
        fraction = 0;
    } else if (decimalPoint == 3) {
        if (valueStart < decimalPoint) {
            amount = value.substring(valueStart, decimalPoint);
        } else {
            amount = 0;
        }
        fraction = value.substring(decimalPoint + 1);
    } else {
        amount = value.substring(valueStart, decimalPoint);
        fraction = value.substring(decimalPoint + 1);
    }
    var promptsArray = new Array();
/*    if (amount >= 0 || fraction > 0)
//        promptsArray = promptsArray.concat(promptBaseUrl + "currency/HKD" + audioFileExtension);

    if (amount > 0) {
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(amount));
        promptsArray = promptsArray.concat(zhTWcurrencyNamePrompts(currency, amount != 1));
        if (fraction > 0) {
           promptsArray.push(promptBaseUrl + "miscellaneous/and" + audioFileExtension);
       }
    }
    if (fraction > 0) { 
      
    	if (fraction.length == 1)
    	{
        	fraction += '0';
        }
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(Math.floor(fraction/10)));
        promptsArray = promptsArray.concat(zhTWsubcurrencyNamePrompts(currency, fraction != 1, false));
        if ((fraction%10)>0)
        {
            promptsArray = promptsArray.concat(zhTWcardinalPrompts(fraction%10));
            promptsArray = promptsArray.concat(zhTWsubcurrencyNamePrompts(currency, fraction != 1, true));
        }
    }
    if (amount == 0 && fraction == 0) {
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(0));
        promptsArray = promptsArray.concat(zhTWcurrencyNamePrompts(currency, true));
    }*/
	speakCurrency = true;
    if (value == "") {
        promptsArray[0] = promptBaseUrl + "miscellaneous/00000" + audioFileExtension;
    } else {
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(value));
        promptsArray = promptsArray.concat(zhTWcurrencyNamePrompts(currency, amount != 1));
	}
    return promptsArray;
}

function zhTWcurrencyNamePrompts(value, isPlural)
{
    return new Array(promptBaseUrl + "currency/yuen" + audioFileExtension);
}

function zhTWsubcurrencyNamePrompts(value, isPlural, isCents)
{
    if (isCents) {
        return new Array(promptBaseUrl + "currency/cents" + audioFileExtension);
    } else {
        return new Array(promptBaseUrl + "currency/ho" + audioFileExtension);
    }
}
// FIXME - 800 as eight hundred
// FIXME - 408 as four oh eight
function zhTWphonePrompts(value)
{
    var phoneNumber;
    var extension;
    var xIndex;
    xIndex = value.indexOf("x");
    if (xIndex != -1) {
        phoneNumber = value.substring(0, xIndex);
        extension = value.substring(xIndex + 1);
    } else {
        phoneNumber = value;
        extension = "";
    }
    
    var promptsArray = new Array();
    if (phoneNumber.length == 10) {
        promptsArray = promptsArray.concat(
            zhTWphoneThreeDigitGroupPrompts(phoneNumber.substring(0, 3)),
            promptBaseUrl + "miscellaneous/350ms" + audioFileExtension,
            zhTWphoneThreeDigitGroupPrompts(phoneNumber.substring(3, 6)),
            promptBaseUrl + "miscellaneous/350ms" + audioFileExtension,
            zhTWphoneThreeDigitGroupPrompts(phoneNumber.substring(6)));
    } else if (phoneNumber.length == 7) {
        promptsArray = promptsArray.concat(
            zhTWphoneThreeDigitGroupPrompts(phoneNumber.substring(0, 3)),
            promptBaseUrl + "miscellaneous/350ms" + audioFileExtension,
            
            zhTWalphanumericPrompts(phoneNumber.substring(3)));
    } else {
        promptsArray = zhTWalphanumericPrompts(phoneNumber);
    }
    if (extension.length > 0) {
        promptsArray.push(promptBaseUrl + "miscellaneous/extension" + audioFileExtension);
        promptsArray = promptsArray.concat(zhTWalphanumericPrompts(extension));
    }
    return promptsArray;        
}
function zhTWphoneThreeDigitGroupPrompts(value)
{
    if (value.charAt(1) == "0" && value.charAt(2) == "0") {
        return zhTWcardinalPrompts(value);
    } else {
        return zhTWalphanumericPrompts(value);
    }
}
function zhTWtimePrompts(value)
{
    if ((value == "") || (value == "000000"))
    {
        var promptsArray = new Array(1);
        promptsArray[0] = promptBaseUrl + "miscellaneous/00000" + audioFileExtension;
        return promptsArray;
    }

    var hours;
    var minutes;
    var seconds;
    var format;
    if (value.match(/^[0-9]+$/)) {
        if (value.length == 4) {
            hours = value.substring(0, 2);
            minutes = value.substring(2, 4);
        } else if (value.length == 6) {
            hours = value.substring(0, 2);
            minutes = value.substring(2, 4);
            seconds = value.substring(4, 6);
        } else {
            return void 0;
        }
        if (hours >= 0 && hours <= 11) {
            format = "a";
            if (hours == 0)
                hours = 12;
        } else if (hours >= 12 && hours <= 24) {
            format = "p";
            if (hours > 12)
                hours -= 12;
        } else {
            return void 0;
        }
    } else if (value.match(/^[0-9]+[?hap]$/)) {
        if (value.length == 5) {
            hours = value.substring(0, 2);
            minutes = value.substring(2, 4);
            format = value.substring(4, 5);
        } else if (value.length == 7) {
            hours = value.substring(0, 2);
            minutes = value.substring(2, 4);
            seconds = value.substring(4, 6);
            format = value.substring(6, 7);
        } else {
            return void 0;
        }
    } else {
        return void 0;
    }
    var promptsArray = new Array();
    if (format == "a") {
        promptsArray.push(promptBaseUrl + "miscellaneous/am" + audioFileExtension);
    } else if (format == "p") {
        promptsArray.push(promptBaseUrl + "miscellaneous/pm" + audioFileExtension);
    }

    promptsArray = promptsArray.concat(zhTWcardinalPrompts(hours));
    promptsArray.push(promptBaseUrl + "miscellaneous/hour" + audioFileExtension);

    if (minutes > 0 && minutes < 10) {
        promptsArray = promptsArray.concat(zhTWalphanumericPrompts("O"));
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(minutes));
        promptsArray.push(promptBaseUrl + "miscellaneous/minute" + audioFileExtension);
    } else if (minutes >= 10) {
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(minutes));
        promptsArray.push(promptBaseUrl + "miscellaneous/minute" + audioFileExtension);
    }
    if (seconds != undefined)  {
        promptsArray.push(promptBaseUrl + "miscellaneous/and" + audioFileExtension);
        promptsArray.push(zhTWcardinalPrompts(seconds));
        if (seconds == 1) {
            promptsArray.push(promptBaseUrl + "miscellaneous/second" + audioFileExtension);
        } else {
            promptsArray.push(promptBaseUrl + "miscellaneous/seconds" + audioFileExtension);
        }
    }
    return promptsArray;
}
function zhTWyearPrompts(year)
{
    var century = year.substring(0,2);
    var rest = year.substring(2,4);
    var promptsArray = new Array();
    if (century == "20") {
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(2000));
    } else {
        promptsArray = promptsArray.concat(zhTWcardinalPrompts(century));
    }
    if (century != "20") {
        if (rest == "00") {
            promptsArray.push(promptBaseUrl + "cardinals/hundred" + audioFileExtension);
        } else if (rest > 0 && rest < 10) {
            promptsArray = promptsArray.concat(zhTWalphanumericPrompts("O"));
            promptsArray =
                promptsArray.concat(zhTWcardinalPrompts(rest.substring(1,2)));
        } else {
            promptsArray = promptsArray.concat(zhTWcardinalPrompts(rest));
        }
    } else {
        if (rest != "00") {
            promptsArray = promptsArray.concat(zhTWcardinalPrompts(rest))
        }
    }
    return promptsArray;
}
function zhTWmonthPrompts(month)
{
    if (month >= 1 && month <= 12) {
        return new Array(promptBaseUrl + "months/" + month + "" + audioFileExtension);
    } else {
        return void 0;
    }
}
function zhTWdayOfWeekPrompts(dayOfWeek)
{
    if (dayOfWeek >= 0 && dayOfWeek <= 6) {
        return new Array(promptBaseUrl + "days/" + dayOfWeek + "" + audioFileExtension);
    } else {
        return void 0;
    }
}
function zhTWcardinalPrompts(number)
{
    if (number === undefined || !isFinite(number)) {
        return void 0;
    }
    if (number > 999999999999999) {
        return void 0;
    }
    var isNegative;
    if (number < 0) {
        isNegative = true;
        number = Math.abs(number);
    }    
    if (number == 0) {
        return new Array(promptBaseUrl + "cardinals/000" + audioFileExtension);
    }
    var str = new String(number);
    var arr = str.split(".");
    number  = new Number(arr[0]);
    if (arr[1] != undefined)
    {
    	var fractionalPart = arr[1];
    }

    /*var fractionalPart = number - Math.floor(number);
    number = number - fractionalPart;*/
    var promptsArray = new Array();
    var magnitude = 0;
	var tempEndDigits = 0;
	var numbertwo = false;
	var temponehandle = false;
	if(number > 9999)
		temponehandle = true;
	if(number == 2)
		numbertwo = true;
    while (number > 0) {
        var endDigits = number % 10000;
        if (endDigits != 0) {
			if(tempEndDigits<1000 && magnitude>0)
				if(tempEndDigits != 0)
					promptsArray = zhTWZero(endDigits).concat(promptsArray);
			promptsArray = zhTWfourDigitsPrompts(endDigits,magnitude,numbertwo,temponehandle,fractionalPart).concat(zhTWmagnitudePrompts(magnitude), promptsArray);
        }
		tempEndDigits = endDigits;
        number = number - endDigits;
        number = number / 10000;
		if(number <= 9999)
			temponehandle = false;
        magnitude++;
    }

    if (isNegative) {
        promptsArray.unshift(promptBaseUrl + "miscellaneous/minus" + audioFileExtension);
    }

    if ( (fractionalPart != undefined) && (fractionalPart != 0) ) {
        number  = new Number(arr[0]);
		if (number == 0)
            promptsArray.push(promptBaseUrl + "cardinals/000" + audioFileExtension); 
        fractionalPart = fractionalPart.toString();//.substring(2);
        promptsArray.push(promptBaseUrl + "miscellaneous/point" + audioFileExtension); 
        promptsArray = promptsArray.concat(zhTWalphanumericPrompts(fractionalPart));
    }
    return promptsArray;
}

function zhTWfourDigitsPrompts(number,magnitude,numbertwo,temponehandle,fractionalPart)
{
    // assert number >=0 && number <= 9999
    if (number < 0 || number > 9999) {
        return void 0;
    }
    var promptsArray = new Array();
	
	var thousand = Math.floor(number / 1000);
    var hundreds = Math.floor(number % 1000 / 100);
    var tens = Math.floor(number % 100 / 10);
    var digits = number % 10;

	if (numbertwo)
	{
		if ( (fractionalPart != undefined) && (fractionalPart != 0) )
		{
			promptsArray.push(promptBaseUrl + "cardinals/002" + audioFileExtension);
			return promptsArray;
		}
		else
		{
		promptsArray.push(promptBaseUrl + "cardinals/002c" + audioFileExtension);
		return promptsArray;
		}
	}
	if (number == 2)
	{
		if(magnitude == 0)
		{	
			promptsArray.push(promptBaseUrl + "cardinals/002" + audioFileExtension);
			return promptsArray;
		}
		else
		{
			promptsArray.push(promptBaseUrl + "cardinals/002c" + audioFileExtension);
			return promptsArray;
		}
	}

    if (thousand > 0) 
    {
		if (thousand == 2)
            promptsArray.push(promptBaseUrl + "cardinals/00" + thousand + "c" + audioFileExtension);
		else
            promptsArray.push(promptBaseUrl + "cardinals/00" + thousand + "" + audioFileExtension);
        promptsArray.push(promptBaseUrl + "cardinals/thousand" + audioFileExtension);
    }

    if (hundreds > 0) 
    {
		if (hundreds == 2)
            promptsArray.push(promptBaseUrl + "cardinals/00" + hundreds + "c" + audioFileExtension);
		else
            promptsArray.push(promptBaseUrl + "cardinals/00" + hundreds + "" + audioFileExtension);
        promptsArray.push(promptBaseUrl + "cardinals/hundred" + audioFileExtension);
    }
	else
	{
		if (thousand != 0 && (tens != 0 || digits != 0))
            promptsArray.push(promptBaseUrl + "cardinals/000" + audioFileExtension);
	}
    
    if (tens == 0)
    {
        if (digits != 0)
		{
            if ((thousand != 0 && hundreds != 0) || (thousand == 0 && hundreds != 0))
                promptsArray.push(promptBaseUrl + "cardinals/000" + audioFileExtension);
			promptsArray.push(promptBaseUrl + "cardinals/00" + digits + "" + audioFileExtension);
		}
    }
    else if (tens == 1)
    {
		if(hundreds>0 || thousand>0)
			promptsArray.push(promptBaseUrl + "cardinals/001"+ audioFileExtension);
		if(hundreds==0 && thousand==0 && temponehandle == true)
			promptsArray.push(promptBaseUrl + "cardinals/001"+ audioFileExtension);
        promptsArray.push(promptBaseUrl + "cardinals/01" + digits + "" + audioFileExtension);
    }
    else 
    {
        promptsArray.push(promptBaseUrl + "cardinals/0" + tens + "0" + audioFileExtension);
    	if (digits != 0)
    	{
            promptsArray.push(promptBaseUrl + "cardinals/00" + digits + "" + audioFileExtension);
        }
    }
    return promptsArray;
}

function zhTWthreeDigitsPrompts(number)
{
    // assert number >=0 && number <= 999
    if (number < 0 || number > 999) {
        return void 0;
    }
    var hundreds = Math.floor(number / 100);
    var tensAndOnes = number % 100;
    var promptsArray = new Array();
    if (hundreds > 0) {
        promptsArray.push(promptBaseUrl + "cardinals/" + hundreds + "00" + audioFileExtension);
    }
    if (tensAndOnes > 0) {
        if (tensAndOnes < 10) {
            promptsArray.push(promptBaseUrl + "cardinals/00" + tensAndOnes + "" + audioFileExtension);
        } else {
            promptsArray.push(promptBaseUrl + "cardinals/0" + tensAndOnes + "" + audioFileExtension);
        }
    }
    return promptsArray;
}

function zhTWordinalThreeDigitsPrompts(number)
{
    // assert number >=0 && number <= 999
    if (number < 0 || number > 999) {
        return void 0;
    }
    var hundreds = Math.floor(number / 100);
    var tensAndOnes = number % 100;
    var promptsArray = new Array();
    if (hundreds > 0) {
        if (tensAndOnes > 0) {
            promptsArray.push(promptBaseUrl + "cardinals/" + hundreds + "00" + audioFileExtension);
        } else {
            promptsArray.push(promptBaseUrl + "cardinals/00" + hundreds + "" + audioFileExtension);
            promptsArray.push(promptBaseUrl + "ordinals/hundredth" + audioFileExtension);
        }
    }
    if (tensAndOnes > 0) {
        if (tensAndOnes < 10) {
            promptsArray.push(promptBaseUrl + "ordinals/00" + tensAndOnes + "" + audioFileExtension);
        } else {
            promptsArray.push(promptBaseUrl + "ordinals/0" + tensAndOnes + "" + audioFileExtension);
        }
    }
    return promptsArray;
}
/**
 * Returns an array of vox file URLs corresponding to the
 * number 10^(3*number).
 *
 * Note the differences between the American and European systems:
 * <pre>
 *       Order of
 *       Magnitude      American    European
 *         10^0            -           -
 *         10^3         thousand    thousand
 *         10^6          million     million
 *         10^9          billion    thousand million or milliard
 *         10^12        trillion     billion
 * </pre>
 *
 * @param number The order of magnitude.
 * @return An array of URL strings.
 */
function zhTWmagnitudePrompts(magnitude)
{
    switch (magnitude) {
        case 0:
            return new Array();
        case 1:
				return new Array(promptBaseUrl + "cardinals/wan" + audioFileExtension); 
        case 2:
				return new Array(promptBaseUrl + "cardinals/yi" + audioFileExtension);
        case 3:
				return new Array(promptBaseUrl + "cardinals/wanyi" + audioFileExtension);
        case 4:
            //return new Array(promptBaseUrl + "cardinals/trillion" + audioFileExtension);
        default:
            return void 0;
    }
}

function zhTWZero(number)
{
		return new Array(promptBaseUrl + "cardinals/000" + audioFileExtension);
}

function zhTWordinalMagnitudePrompts(number)
{
    switch (number) {
        case 0:
            return new Array();
        case 1:
            return new Array(promptBaseUrl + "ordinals/thousandth" + audioFileExtension); 
        case 2:
            return new Array(promptBaseUrl + "ordinals/millionth" + audioFileExtension); 
        case 3:
            return new Array(promptBaseUrl + "ordinals/billionth" + audioFileExtension); 
        case 4:
            return new Array(promptBaseUrl + "ordinals/trillionth" + audioFileExtension); 
        default:
            return void 0;
    }
}
function zhTWordinalPrompts(number)
{
    if (number === undefined || !isFinite(number) || number <= 0 ||
        ((number - Math.floor(number)) != 0) || number > 999999999999999 ) {
        return void 0;
    }
    var promptsArray = new Array();
    var magnitude = 0;
    var ordinal = true;
    while (number > 0) {
        var endDigits = number % 1000;
        if (endDigits != 0) {
            if (magnitude == 0 && ordinal) {
                promptsArray =
                    zhTWordinalThreeDigitsPrompts(endDigits).concat(promptsArray);
                ordinal = false;
            } else {
                if (ordinal) {
                    promptsArray = zhTWthreeDigitsPrompts(endDigits).concat(zhTWordinalMagnitudePrompts(magnitude), promptsArray);
                    ordinal = false;
                } else {
                    promptsArray = zhTWthreeDigitsPrompts(endDigits).concat(zhTWmagnitudePrompts(magnitude), promptsArray);
                }
            }
        }
        number = number - endDigits;
        number = number / 1000;
        magnitude++;
    }
    return promptsArray;
}
function zhTWalphanumericPrompts(string)
{
    var i;
    var ch;
    var promptsArray = new Array();
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++) {
        ch = string.charAt(i);
        ch = ch.toLowerCase();
        if (ch.match(/\d/)) {
            promptsArray.push(promptBaseUrl + "cardinals/00" + ch + audioFileExtension);
        } else if (ch.match(/[a-z]/)) {
            promptsArray.push(promptBaseUrl + "letters/" + ch + audioFileExtension);
        } else if (ch.match(/\+/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/plus" + audioFileExtension);
        } else if (ch.match(/\</)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/lessthan" + audioFileExtension);
        } else if (ch.match(/\=/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/equals" + audioFileExtension);
        } else if (ch.match(/\%/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/percent" + audioFileExtension);
        } else if (ch.match(/\-/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/minus" + audioFileExtension);
        } else if (ch.match(/\>/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/greaterthan" + audioFileExtension);
        } else if (ch.match(/\&/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/and" + audioFileExtension);
        } else if (ch.match(/\./)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/dot" + audioFileExtension);
        } else if (ch.match(/\#/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/pound" + audioFileExtension);
        } else if (ch.match(/\*/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/star" + audioFileExtension);
        } else if (ch.match(/\@/)) {
            promptsArray.push(promptBaseUrl + "miscellaneous/at" + audioFileExtension);
        } else  {
            promptsArray.push(promptBaseUrl + "miscellaneous/special_character" + audioFileExtension);        	
        }
    }
    return promptsArray;
}
function zhTWdtmfPrompts(string)
{
    var i;
    var ch;
    var promptsArray = new Array();
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++) {
        ch = string.charAt(i);
        if (ch.match(/[0-9abcd]/)) {
            promptsArray.push("builtin:dtmf/dtmf_" + ch + audioFileExtension);
        } else if (ch == "#") {
            promptsArray.push("builtin:dtmf/dtmf_pound" + audioFileExtension);
        } else if (ch == "*") {
            promptsArray.push("builtin:dtmf/dtmf_star" + audioFileExtension);
        }
    }
    return promptsArray;
}
