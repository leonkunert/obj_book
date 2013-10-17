$.fn.book = function(options) {
    this.auflage     = options.auflage;
    this.bilder      = options.bilder;
    this.druck       = options.druck;
    this.illustrator = options.illustrator;
    this.land        = options.land;
    this.nr          = options.nr;
    this.regal       = options.regal;
    this.type        = options.type;
    this.stichworte  = options.stichworte;
    this.text        = options.text;
    this.titel       = options.titel;
    this.verlag      = options.verlag;
    this.zuordnung   = options.zuordnung;

    this.add_to_db   = function () {
        $.ajax({
            url: options.url,
            type: 'POST',
            dataType: 'json',
            data: this,
        })
        .always(function(result) {
            console.log(result);
        });
    };

    this.update_in_db = function () {
        $.ajax({
            url: options.url,
            type: 'POST',
            dataType: 'json',
            data: this,
        })
        .always(function(result) {
            console.log(result);
        });
    };
}