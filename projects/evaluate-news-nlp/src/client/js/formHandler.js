function handleSubmit(event) {
  event.preventDefault()
  const formText = document.getElementById('url').value;

if(Client.checkForUrl(formText)) {
  fetch("http://localhost:8081/url", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({url: formText}),
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('text').innerHTML = 'text: ' + data.sentence_list[0].text;
    document.getElementById('model').innerHTML = 'model: ' + data.model;
    document.getElementById('score_tag').innerHTML = 'score_tag: ' + data.score_tag;
    document.getElementById('agreement').innerHTML = 'agreement: ' + data.agreement;
    document.getElementById('subjectivity').innerHTML = 'subjectivity: ' + data.subjectivity;
    document.getElementById('confidence').innerHTML = 'confidence: ' + data.confidence;
    document.getElementById('irony').innerHTML = 'irony: ' + data.irony;
  });

  } else {
    alert('Please enter valid url');
    document.getElementById('results').innerHTML = 'Not a valid url';
  }
}

export { handleSubmit };
