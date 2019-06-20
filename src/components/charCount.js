import React from 'react';

function CharCount() {

    return (
      <div class="input-group mb-3">
        <form>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            id="demo"
            name="email"
          />
          <div class="input-group-append">
            <span class="input-group-text">14/50</span>
          </div>
        </form>
      </div>
    );
}

export default CharCount;