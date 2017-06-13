import delay from './delay';

const countries = [
    {
        id: 1,
        name: 'Polska',
        flagUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAAXNSR0IArs4c6QAAAJ1JREFUSA1j3LjviPrtOw/3f/v+Q5KBjoCLk+O5qoq8I7OJtfNlelsO8ufvP394P3/+GswCs7w4PY6O/mdg6J25iAFkNxNdbcVi2agDRkNgNARGQ4BxMgPDf1D54KUqjaWYoJ3QtttPwYaPRsFoCIyGwGgIDHgIMM5kZnr26+8/uraIYeUrOzPTEyYJLm5HNmamFzBBetEgy8W5uF0Ap9grDTQrmbwAAAAASUVORK5CYII='

    },
    {
        id: 2,
        name: 'Wielka Brytania',
        flagUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAFJklEQVRIS+2Wa1BUZRjHf2f3wAK7G4iKiOItNRgZawxdaSa/mF3GcHJSKTPvhXjBTEnLQMOAtMQL5XhDx2tZQ5OCHwybRmcSSR2VodEhvCIBXgYW2HV195zTnHfdlU1KqQ/1ofPlvM/7Ppf/+7zPTRpHUvZgKpZacBgAWtcV6j/2bYFfKm+Kddsve10XQVrmzwjY98llzb8vExYmsyQvIoDPJ9eKWa1gcI6UjVnxGW8LYMaECQwftouampa/BcBolCj6diwVl4+2C0DYwqxK+aDpxLThCUhR0Zgzc5AThwmhxiYPKSkXabYrfiWlpQOxWo00xMej2u1i3xAeTrdz52hpURg1qkrsrS+IZWiiGUmSUG9cx/lxJp6fj/n1bD9eKdZ+AFOGDfIeShIhE6cQOisdKTiY5maFjIwazp69LY4fBiA5uZqNG3sRFxcq+O/+WIojdzlasxcsRhl53EQKFy72msteVyg8MF9r4u6+neC+Kw7kAU9gyV6J3H8giqJRVNRIfn7DXwK4fVulsdFDTEwwmqOV1s9yuVPynf/WRtuzmNIXY+jVB1VV2L+/+j6AjLenotbW4CpYhefoD150JhPmOQsIe2MKigpHjrRgs1kwmw0BT2Ds0YOoEyfQNOFA3GdO0Zy5GKX2mveJevclJH0xctIIQZ8+7SQv7xDFxReQYKX2wgt9ycp6iSFDwgSD/lbOtXmoF38VdLAtifDslWidu6EHl26kbQwYY2OJKi9HR9BSkI9jx1ZQFCSLlZDpszGNnwRBQdTXuykpsbN79y3Ky4u9l9QB6AubLZmUlEiSkyPo2TNIKHAV7eX2pvWoLXYMj4UT8eFHhL74shBsD4By4zr1I59BkgyYxrxKaNq7GCI7C/6DB+1s2HAdh0MVtB+ALwYy06f73+pRFu164FEE7/GsWL8tMAj/NQC+OvBa9+4dwP/PWb+qq/N64H8APg9MjIvrkF/V5maRdt5EN2CwWjskv/f8+f9IEPrS8J1pUwQiWZYwmQyi2KCpaE4nmqogBZswhIT4b9leGmoeN6rT2zMMoaEgB4m1x6Phcnnz3/et3b7D64G2hSgjI5rRo8PFQcuhg9QtmoeutNeaz+n0ylixrztdx/ZndcB1oZpLUyfhqqoicmYaUe8vQ5JlysocrF5dz82bHqEnoBJ2725mz57JJCWZ0dxuGnKyuFW4CVPvPvTbsZuwQQniua/WuOjSOfjBXuArxfeup7S2cnleGk3FBwh9eiixG7YR1KMnDQ0e1q5toKys9cFKqDcjd+01rrw1GeeZU4Q/N4rHN29DjohAUTW+L7XzSW49JSUDHpgHjDExRJ08ib1ZISREwhRsQNM06taspjZvBUZrOLEFm7GOfF5A1PvB+PFbAoMwtU83rqan4mlqosfCRfT8IBPJaOSOW+XTVfWUFHv7+cPmgdTUK3yxoRedImTB33S4lOqZ04TebnMXEL0kC0k2cuBAFXPnHr5fiGzWUIwWM/03FdI5eYxX2O5hdtpVLl684w+ehwHQJ6KwMAM5uTGidRskCdflS5x/fQLOykostiT6btnJ1n6xXg/46sCIpxKI//JrwuLihftOnHKw5L1anM7A6H0UAD60k96MZFZqV2TZgOJwUD0njRvf7COoa1eOXam99wR/GErnuRWWLf+J3JyygLTxER2ZinWZxMRoSg+nULBjj1DRdppuxapI+lj+JBVLzffG8n3Dd1F+/Ld2jeubHQWgy3TqFMKC5ZYAALrxChJyfwdy2oeb0oaIwAAAAABJRU5ErkJggg=='

    },
    {
        id: 3,
        name: 'Niemcy',
        flagUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAlklEQVRIS2NkYGAQZ2Bg2MPAwKDDQF9whYGBwYWRgYHh8gBYDvPqFZAD/oN46urqdPX/zZs3wfaNOmA0BAY+BHYxMvxnZmJiUJOSomsuuP7kCSQXjDpgNARGQ2DAQ+BUA6Q2NA2QoGs5cHrDC0g5MOqA0RAYDCEwcI1SRobzjCdaGcSZfjPsY2Bg0KJrPmRkOP+PhcETAFVyagAlg6MsAAAAAElFTkSuQmCC'

    }
];

class CoverApi {
    static getInitialState(){
        return Object.assign([], countries);
    }
}

export default CoverApi;
