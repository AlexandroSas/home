module.exports = {
    content: ['./**/*.html', './public/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                accent: '#CD387B',   
                primary: '#EC66A4',      
                secondary: '#FFCDE4',     
                bg: '#19181D',        
                // danger: '',      
                // neutral: '',     
            },
                zIndex: {
                20: '20',
                100: '100',
                150: '150',  // add more if needed
                200: '200',
                999: '999',
            },
        },
    },  
    safelist: [
        {
            pattern: /(bg|text|border|placeholder)-(accent|primary|secondary|bg|gray)(-\d+(\/\d+)?)?/,
            variants: ['hover']
        },
        { pattern: /mt-auto/ },
        { pattern: /font-(bold|semibold|sm)/ },
        { pattern: /grid-cols-\d+/ },
        { pattern: /col-start-\d+/ },
        { pattern: /hidden/}
    ],
    plugins: [],
}
