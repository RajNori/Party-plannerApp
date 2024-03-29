async function newFormHandler(event) {
  event.preventDefault();
  const description = document.querySelector('#cake-description').value;
  const name = document.querySelector('#cake-name').value;

  const response = await fetch('/api/cakes', {
    method: 'POST',
    body: JSON.stringify({
      name,
      description,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload('/cakes');
  } else {
    alert('Failed to add cake');
  }
}

document.querySelector('.new-cake-form').addEventListener('submit', newFormHandler);
