const questionnaire = {
    "global_function": "1\/(1+exp(-$x))",
    "constants": {
        "ak": -3.294,
        "bcc": -13.16
    },
    "questions": {
        "1": {
            "order": 0,
            "type": "multiple choice",
            "weights": {
                "ak": 0,
                "bcc": 0
            },
            "question": "Are you male or female?",
            "description": null,
            "choices": {
                "1": {
                    "label": "Male",
                    "value": 1,
                    "order": 0
                },
                "2": {
                    "label": "Female",
                    "value": 2,
                    "order": 1
                }
            }
        },
        "2": {
            "order": 1,
            "type": "multiple choice",
            "weights": {
                "ak": 0.986,
                "bcc": 0
            },
            "question": "Have there been periods in your life during which you were in an area with strong sun exposure for a prolonged period of time, such as in the tropics or a mediterranean country?",
            "description": " ",
            "choices": {
                "3": {
                    "label": "Yes",
                    "value": 2,
                    "order": 0
                },
                "4": {
                    "label": "No",
                    "value": 1,
                    "order": 1
                },
                "5": {
                    "label": "Don't know",
                    "value": 0,
                    "order": 2
                }
            }
        },
        "3": {
            "order": 2,
            "type": "multiple choice",
            "weights": {
                "ak": -0.32,
                "bcc": 0.301
            },
            "question": "Have you been on 'sun vacations' often?",
            "description": "With a sun vacation we mean any kind of vacation during which you were either sunbathing or outside in the direct sunlight for a prolonged period of time.",
            "choices": {
                "6": {
                    "label": "Often",
                    "value": 5,
                    "order": 0
                },
                "7": {
                    "label": "Regularly",
                    "value": 4,
                    "order": 1
                },
                "8": {
                    "label": "Sometimes",
                    "value": 3,
                    "order": 2
                },
                "9": {
                    "label": "Rarely",
                    "value": 2,
                    "order": 3
                },
                "10": {
                    "label": "Never",
                    "value": 1,
                    "order": 4
                }
            }
        },
        "4": {
            "order": 3,
            "type": "message",
            "weights": {
                "ak": null,
                "bcc": null
            },
            "question": null,
            "description": "The following questions are about the spot on your skin:",
            "choices": []
        },
        "5": {
            "order": 4,
            "type": "multiple choice",
            "weights": {
                "ak": 0,
                "bcc": 1.353
            },
            "question": "Does the spot bleed? ",
            "description": "(for instance, when you dry yourself after showering, or when you accidentally touch it)",
            "choices": {
                "11": {
                    "label": "Yes",
                    "value": 3,
                    "order": 1
                },
                "12": {
                    "label": "Sometimes",
                    "value": 2,
                    "order": 2
                },
                "13": {
                    "label": "No",
                    "value": 1,
                    "order": 3
                },
                "14": {
                    "label": "Don't know",
                    "value": 0,
                    "order": 4
                }
            }
        },
        "6": {
            "order": 6,
            "type": "multiple choice",
            "weights": {
                "ak": 1.4,
                "bcc": 0
            },
            "question": "Is the spot in a place where it gets direct sunlight? ",
            "description": "For instance on your face, ears, back of the hands, top of your head, or neck.",
            "choices": {
                "15": {
                    "label": "Yes",
                    "value": 2,
                    "order": 1
                },
                "16": {
                    "label": "No",
                    "value": 1,
                    "order": 2
                }
            }
        },
        "7": {
            "order": 7,
            "type": "multiple choice",
            "weights": {
                "ak": 1.075,
                "bcc": 1.942
            },
            "question": "What is the color of the spot?",
            "description": "",
            "choices": {
                "17": {
                    "label": "Skin colored",
                    "value": 0,
                    "order": 1
                },
                "18": {
                    "label": "Light red",
                    "value": 1,
                    "order": 2
                },
                "19": {
                    "label": "Dark red",
                    "value": 0,
                    "order": 3
                },
                "20": {
                    "label": "Bright red",
                    "value": 0,
                    "order": 4
                },
                "21": {
                    "label": "Brownish",
                    "value": 0,
                    "order": 5
                }
            }
        },
        "8": {
            "order": 8,
            "type": "multiple choice",
            "weights": {
                "ak": -2.259,
                "bcc": 1.204
            },
            "question": "Is the spot flat or elevated? ",
            "description": "A flat spot you can only see but not feel. Elevated spots you can feel when touched, and you can also see them when watched from the side.",
            "choices": {
                "22": {
                    "label": "Flat",
                    "value": 1,
                    "order": 1
                },
                "23": {
                    "label": "Elevated",
                    "value": 2,
                    "order": 2
                }
            }
        },
        "9": {
            "order": 9,
            "type": "multiple choice",
            "weights": {
                "ak": 0,
                "bcc": 0
            },
            "question": "How rough is the spot?",
            "description": "",
            "choices": {
                "24": {
                    "label": "Not at all",
                    "value": 1,
                    "order": 1
                },
                "25": {
                    "label": "It feels rough",
                    "value": 2,
                    "order": 2
                },
                "26": {
                    "label": "It feels rough and also looks rough",
                    "value": 3,
                    "order": 3
                },
                "27": {
                    "label": "It is a rough, thick, yellowish spot",
                    "value": 4,
                    "order": 4
                }
            }
        },
        "10": {
            "order": 10,
            "type": "multiple choice",
            "weights": {
                "ak": 0,
                "bcc": 0
            },
            "question": "Is there a thickening under the skin?",
            "description": "For instance a lump or a swelling, that causes the skin to be pushed outward.",
            "choices": {
                "28": {
                    "label": "Yes",
                    "value": 2,
                    "order": 1
                },
                "29": {
                    "label": "No",
                    "value": 1,
                    "order": 2
                }
            }
        },
        "11": {
            "order": 11,
            "type": "multiple choice",
            "weights": {
                "ak": -2,
                "bcc": 1.268
            },
            "question": "Does the spot appear shiny?",
            "description": "",
            "choices": {
                "30": {
                    "label": "Yes",
                    "value": 2,
                    "order": 1
                },
                "31": {
                    "label": "No",
                    "value": 1,
                    "order": 2
                }
            }
        },
        "12": {
            "order": 12,
            "type": "multiple choice",
            "weights": {
                "ak": 1.563,
                "bcc": 0
            },
            "question": "Are there small dilated blood vessels around the spot? ",
            "description": "If so, you typically see red crinkled lines near and/or under the spot.",
            "choices": {
                "32": {
                    "label": "Yes",
                    "value": 2,
                    "order": 1
                },
                "33": {
                    "label": "No",
                    "value": 1,
                    "order": 2
                }
            }
        },
        "13": {
            "order": 13,
            "type": "multiple choice",
            "weights": {
                "ak": -0.706,
                "bcc": 2.164
            },
            "question": "Is the spot a wound?",
            "description": "For instance, is it open or do you see ulceration?",
            "choices": {
                "34": {
                    "label": "Yes",
                    "value": 2,
                    "order": 1
                },
                "35": {
                    "label": "No",
                    "value": 1,
                    "order": 2
                }
            }
        },
        "14": {
            "order": 14,
            "type": "integer",
            "weights": {
                "ak": 0,
                "bcc": 0.0648
            },
            "question": "What is your age?",
            "description": "",
            "choices": [],
            "settings": {
                "min": 0,
                "max": 150,
                "fnc": "sqrt($x)"
            }
        },
        "15": {
            "order": 5,
            "type": "multiple choice",
            "weights": {
                "ak": 0,
                "bcc": 0
            },
            "question": "Does the spot itch?",
            "description": "",
            "choices": {
                "36": {
                    "label": "Yes, a lot",
                    "value": 3,
                    "order": -1
                },
                "37": {
                    "label": "Yes, a little",
                    "value": 2,
                    "order": 0
                },
                "38": {
                    "label": "No, not really",
                    "value": 1,
                    "order": 1
                }
            }
        }
    }
};

const questionnaireContainer = document.getElementById('questionnaire-container');
let html = '<form id="questionnaire">';

// Sort questions by order
const questions = Object.values(questionnaire.questions).sort((a, b) => a.order - b.order);

for (const q of questions) {
    if (q.type === 'message') {
        html += `<p>${q.description}</p>`;
    } else if (q.type === 'multiple choice') {
        html += `<fieldset><legend>${q.question}</legend>`;
        if (q.description) html += `<p>${q.description}</p>`;
        const choices = Object.values(q.choices).sort((a, b) => a.order - b.order);
        for (const [index, c] of choices.entries()) {
            const id = `q${q.order}-${index}`;
            html += `<input type="radio" name="q${q.order}" value="${c.value}" id="${id}" ${index === 0 ? 'required' : ''}><label for="${id}">${c.label}</label>`;
        }
        html += '</fieldset>';
    } else if (q.type === 'integer') {
        html += `<fieldset><legend>${q.question}</legend>`;
        if (q.description) html += `<p>${q.description}</p>`;
        html += `<label><input type="number" name="q${q.order}" required></label>`;
        html += '</fieldset>';
    }
}

html += '<button type="submit">Submit</button></form>';
questionnaireContainer.innerHTML = html;

document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = {};
    for (const [key, value] of formData.entries()) {
        answers[key] = parseFloat(value);
    }

    // Calculate scores
    let akScore = questionnaire.constants.ak;
    let bccScore = questionnaire.constants.bcc;

    for (const q of Object.values(questionnaire.questions)) {
        const answerKey = `q${q.order}`;
        let answerValue = answers[answerKey];
        if (answerValue === undefined) continue; // unanswered

        if (q.type === 'integer' && q.settings && q.settings.fnc) {
            // Apply function, e.g., sqrt for age
            if (q.settings.fnc === 'sqrt($x)') {
                answerValue = Math.sqrt(answerValue);
            }
        }

        akScore += q.weights.ak * answerValue;
        bccScore += q.weights.bcc * answerValue;
    }

    // Apply sigmoid
    const akProb = 1 / (1 + Math.exp(-akScore));
    const bccProb = 1 / (1 + Math.exp(-bccScore));

    // Display results
    const resultsHtml = `
        <h2>Results</h2>
        <p>Actinic Keratosis (AK) Probability: ${(akProb * 100).toFixed(2)}%</p>
        <p>Basal Cell Carcinoma (BCC) Probability: ${(bccProb * 100).toFixed(2)}%</p>
        <p><strong>Note:</strong> This is not a medical diagnosis. Please consult a doctor for professional advice.</p>
        <button onclick="location.reload()">Take Again</button>
    `;

    root.innerHTML = resultsHtml;
});